/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import dbConnect from '../../../utils/dbConnect';
import memberdata from '../../../models/memberdata';
import serverinfo from '../../../models/serverinfo';

// Connect database
dbConnect();

export default async (req, res) => {
  // Get the requisition method and parameter ids
  const {
    query: { ids },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        // Separate the ids with a comma in an array
        const idsArray = ids.split(',');

        // Get all data and information from the server
        const allData = await memberdata.find({})
        const serverData = await serverinfo.findOne({
          serverID: '463385509717082113',
        });

        // Organizes user information corresponding to ids including medals
        const usersDataArray = [];
        const usersDataFinal = [];
        const medailsUser = [];

        idsArray.map((id) => {
          const user = allData.find((reg) => reg.userID === id);
          const meds = [];

          if (!user) return

          // selects the user's medals
          serverData.medails.map((regM) => {
            if (user.medails.find((med) => med === regM.name) === regM.name) meds.push(regM);
          });

          usersDataFinal.push(user);
          medailsUser.push(meds);
        });

        if (!memberdata) return res.status(400).json({ success: false });

        res.status(200).json({
          success: true,
          data: {
            medailsUser,
            usersData: usersDataFinal,
            dataSearch: allData,
          },
        });
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false });
      }
      break;
    default:
      break;
  }
};
