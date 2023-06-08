import { useSelectClass } from "../../hooks/useSelectClass";

const SelectedClass = () => {
  const [classes] = useSelectClass();
  console.log(classes);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Class Image</th>
              <th>ClassName</th>
              <th>Instructors name</th>
              <th>Available seats</th>
              <th>Action</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {classes.length > 0 &&
              classes.map((classData, index) => (
                <tr key={classData._id}>
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
                  <td>{classData?.className}</td>
                  <td>{classData?.instructorName}</td>
                  <td>{classData?.seats}</td>
                  <td>
                    <button className="btn btn-xs">Delete</button>
                  </td>
                  <td>
                    <button className="btn btn-xs">${classData?.price} tk.</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
