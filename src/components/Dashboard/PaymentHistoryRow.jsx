import moment from "moment/moment";

const PaymentHistoryRow = ({classData, index}) => {
    const formattedDate = moment(classData?.date).format('LLL');
    return (
        <>
          <tr key={classData._id}>
                  <td>{index + 1}</td>
                  <td>{classData?.className}</td>
                  <td>{classData?.instructorName}</td>
                  <td>{classData?.transactionId}</td>
                  <td>{formattedDate}</td>
                  <td>{classData?.price}</td>
                  <td className="font-bold">
                    Paid
                  </td>
                </tr>  
        </>
    );
};

export default PaymentHistoryRow;