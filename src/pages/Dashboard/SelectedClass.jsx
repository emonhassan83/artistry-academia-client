const SelectedClass = () => {
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
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                class Name
              </td>
              <td>Instructors name</td>
              <td>Available seats</td>
              <td>
                <button className="btn btn-xs">Delete</button>
              </td>
              <td>
                <button className="btn btn-xs">$ tk.</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default SelectedClass;