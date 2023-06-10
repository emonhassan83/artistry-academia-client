import { Helmet } from "react-helmet-async";
import { useEnrollClass } from "../../../hooks/useClass";
import PaymentHistoryRow from "../../../components/Dashboard/PaymentHistoryRow";

const PaymentHistory = () => {
  const [classes] = useEnrollClass();
  console.log(classes);
  return (
    <div>
      <Helmet>
        <title>Artistry Academia | Payment History</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>ClassName</th>
              <th>Instructor Name</th>
              <th>Transaction Id</th>
              <td>Payment Date</td>
              <td>Pay Amount</td>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {classes &&
              classes.map((classData, index) => (
                <PaymentHistoryRow
                  key={classData._id}
                  classData={classData}
                  index={index}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
