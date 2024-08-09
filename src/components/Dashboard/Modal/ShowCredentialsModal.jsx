/* eslint-disable no-unused-vars */
const ShowCredentialsModalData = ({ setOpen }) => {
  const demoCredentials = [
    {
      role: "Super Admin",
      email: "john@example.com",
      password: "!Aa123",
    },
    {
      role: "Admin",
      email: "alice@example.com",
      password: "!Aa123",
    },
    {
      role: "User",
      email: "emily@example.com",
      password: "!Aa123",
    },
  ];

  return (
    <div>
      {demoCredentials && (
        <>
          <p className="text-sm mb-3 text-yellow-600">
            <strong>Warning:</strong> These are demo credentials intended for
            demonstration purposes only. Please do not use them for actual
            authentication.
          </p>
          <div className="space-y-3">
            {demoCredentials.map((credential, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-md">
                <h5 className="text-lg font-semibold">{credential.role}</h5>
                <p className="text-sm">
                  <strong>Email:</strong> {credential.email}
                </p>
                <p className="text-sm">
                  <strong>Password:</strong> {credential.password}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowCredentialsModalData;
