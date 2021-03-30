/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import dbConnect from '../../../utils/dbConnect';
import memberdata from '../../../models/memberdata';

// Connect database
dbConnect();

export default async (req, res) => {
  // Get the requisition method and parameter ids
  const { method } = req;

  console.log(req);

  switch (method) {
    case 'GET':
      try {
        // Get all data and information from the server
        const allData = await memberdata.find({}, { 
          _id: 0,
          userID: 1,
          nickname: 1,
          avatar: 1,
          usertag: 1,
        })

        if (!memberdata) return res.status(400).json({ success: false });

        res.status(200).json({
          success: true,
          data: allData,
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
