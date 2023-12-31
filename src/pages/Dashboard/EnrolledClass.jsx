import { Helmet } from "react-helmet-async";
import { useEnrollClass } from "../../hooks/useClass";
import { useTheme } from "../../providers/ThemeProvider";

const EnrolledClass = () => {
  const [classes] = useEnrollClass();
  const { theme } = useTheme(); // for using light and dark themes

  return (
    <div>
      <Helmet>
        <title>Artistry Academia | Enrolled Class</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className={`table ${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-800'}`}>
          {/* head */}
          <thead className={`${theme.mode=== 'dark'? 'text-gray-100' : 'text-gray-800'}`}>
            <tr>
              <th>SL</th>
              <th>Class Image</th>
              <th>Student Name</th>
              <th>ClassName</th>
              <th>Instructor Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {classes &&
              classes.map((classData, index) => (
                <tr key={classData._id}>
                  <td>{index + 1}</td>
                  
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
                  <td>{classData?.name}</td>
                  <td>{classData?.className}</td>
                  <td>{classData?.instructorName}</td>
                  
                  <td className="font-bold">
                    Enrolled
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
