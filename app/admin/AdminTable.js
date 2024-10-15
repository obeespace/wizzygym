const BasicTable = () => {
    const data = [
      { name: "John Doe", email: "john@example.com", status: "Active", coach: "Wisdom", phone: "234567890" },
      { name: "Jane Smith", email: "jane@example.com", status: "Expired", coach: "Jon", phone: "54678920" },
      { name: "Alice Brown", email: "alice@example.com", status: "Active", coach: "Panther", phone: "98756543" },
    ];
  
    return (
      
        <div className="w-full max-w-4xl border border-gray-700 shadow-md rounded-2xl px-3 py-2">
          <table className="min-w-full rounded-2xl ">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-gray-700 text-left">Name</th>
                <th className="px-4 py-2 border-b border-gray-700 text-left hidden lg:flex">Email</th>
                <th className="px-4 py-2 border-b border-gray-700 text-left">Status</th>
                <th className="px-4 py-2 border-b border-gray-700 text-left hidden lg:flex">Coach</th>
                <th className="px-4 py-2 border-b border-gray-700 text-left">Phone</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index} className="hover:bg-gray-900">
                  <td className="px-4 py-2 ">{user.name}</td>
                  <td className="px-4 py-2 hidden lg:flex">{user.email}</td>
                  <td className="px-4 py-2 "><div className="border border-green-600 w-fit px-2 py-1 rounded-lg">{user.status}</div></td>
                  <td className="px-4 py-2 hidden lg:flex">{user.coach}</td>
                  <td className="px-4 py-2 ">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
    );
  };
  
  export default BasicTable;