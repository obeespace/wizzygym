const BasicTable = ({ users }) => {
  
    return (
      
        <div className="w-full max-w-4xl border border-gray-700 shadow-md rounded-2xl px-3 py-2">
          <table className="min-w-full rounded-2xl ">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-gray-700 text-left">Name</th>
                  <th className="px-4 py-2 border-b border-gray-700 text-left hidden lg:table-cell">Email</th>
                <th className="px-4 py-2 border-b border-gray-700 text-left">Status</th>
                <th className="px-4 py-2 border-b border-gray-700 text-left hidden lg:table-cell">Coach</th>
                <th className="px-4 py-2 border-b border-gray-700 text-left hidden lg:table-cell">Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-900">
                  <td className="px-4 py-2 ">{user.fullname}</td>
                  <td className="px-4 py-2 hidden lg:table-cell">{user.email}</td>
                  <td className="px-4 py-2 "><div className={`border ${user.subscription === "Disactivated" ? "border-red-600" : "border-green-600"}  w-fit px-2 py-1 rounded-lg`}>{user.subscription}</div></td>
                  <td className="px-4 py-2 hidden lg:table-cell">{user.trainer}</td>
                  <td className="px-4 py-2 hidden lg:table-cell">{user.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
    );
  };
  
  export default BasicTable;