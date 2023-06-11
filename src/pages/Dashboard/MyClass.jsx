import { Helmet } from "react-helmet-async";
import { useClassByEmail } from "../../hooks/useClass";

const MyClass = () => {
  const [classes] = useClassByEmail();
  
  
  return (
    <div>
      <Helmet>
        <title>Artistry Academia | My Class</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Class Image</th>
              <th>ClassName</th>
              <th>Status</th>
              <th>Total Enrolled</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              classes && classes.map((classData, index) => (<tr key={classData._id}>
                <td>{index+1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classData?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {classData?.className}
                </td>
                <td>{classData?.status}</td>
                <td>{classData?.totalEnrolled}</td>
                <td>{classData?.feedback ? classData.feedback : 'No Feedback'}</td>
                <td>
                  <button className="btn btn-xs">Update</button>
                </td>
              </tr>))
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
