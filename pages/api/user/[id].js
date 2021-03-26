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
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        // Separate the ids with a comma in an array
        const serverData = await serverinfo.findOne({
          serverID: '463385509717082113',
        });

        // Organizes user information corresponding to ids including medals
        const medailsUser = [];

        const userData = await memberdata.findOne({
          userID: id,
        });

        if (!memberdata || !userData) return res.status(400).json({ success: false });

        serverData.medails.map((regM) => {
          if (userData.medails.find((med) => med === regM.name) === regM.name) medailsUser.push(regM);
        });

        res.status(200).json({
          success: true,
          data: {
            medailsUser,
            userData,
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
