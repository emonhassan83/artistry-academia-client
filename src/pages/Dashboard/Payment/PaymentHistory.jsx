import { Helmet } from "react-helmet-async";
import { useEnrollClass } from "../../../hooks/useClass";
import PaymentHistoryRow from "../../../components/Dashboard/PaymentHistoryRow";
import { useTheme } from "../../../providers/ThemeProvider";

const PaymentHistory = () => {
  const [classes] = useEnrollClass();
  const { theme } = useTheme(); // for using light and dark themes

  return (
    <div>
      <Helmet>
        <title>Artistry Academia | Payment History</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className={`table ${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-800'}`}>
          {/* head */}
          <thead className={`${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-800'}`}>
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
