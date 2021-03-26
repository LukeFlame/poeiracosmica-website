/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import dbConnect from '../../../utils/dbConnect';
import memberdata from '../../../models/memberdata';
import serverinfo from '../../../models/serverinfo';

// Connect database
dbConnect();

export default async (req, res) => {
  // Get the requisition method
  const { method } = req;

  // De acordo com o método, realiza algo
  switch (method) {
    case 'GET':
      try {
        const options = { 
          _id: 0,
          userID: 1,
          nickname: 1,
          avatar: 1,
          usertag: 1,
          atoms: 1,
          xp: 1,
          level: 1,
          votes: 1,
        };

        // Get all data, including ranking and server information
        const allData = await memberdata.find({}, { ...options,  });
        const dataExp = allData.sort(function (a, b) {
            return  b.xp - a.xp;
          }).slice(0, 25);
        const dataAtoms = allData.sort(function (a, b) {
            return b.atoms - a.atoms;
          }).slice(0, 25);
        const dataVotes = allData.sort(function (a, b) {
            return b.votes - a.votes;
          }).slice(0, 25);
        const serverData = await serverinfo.findOne({
          serverID: '463385509717082113',
        });

        // Counts the total amount of atoms on the server
        let atomsCount = 0;

        allData.map((reg) => {
          atomsCount += reg.atoms;
        });

        // If there is a problem with the database, it returns an error
        if (!memberdata) return res.status(400).json({ success: false });

        res.status(200).json({
          success: true,
          data: {
            atomsCount,
            membersCount: serverData.memberCount,
            dataExp,
            dataAtoms,
            dataVotes,
            dataSearch: allData,
          },
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      break;
  }
};
