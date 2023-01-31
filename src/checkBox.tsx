import { useEffect, useState } from "react";

export default function CheckBox() {
    const [peopleInfo, setPeopleInfo] = useState<any>();
   const [data,setData]=useState([])
       async function getData()
        {
            const response=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await response.json(); 
            console.log(data)
            setData(data)
        }
        getData()
    
   
    return (
      <div>
        <table>
          <tr>
            {
                 // @ts-ignore: Unreachable code error
            data.map((item:any) => {
              return (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    width: "150px"
                  }}
                >
                  <input
                    onChange={() => {
                      setPeopleInfo((state:any) => ({
                        ...state,
                        [item.id]: {
                          id: item.id,
                          first: item.name,
                          last: item.lastName,
                          age: item.age
                        }
                      }));
                    }}
                     // @ts-ignore: Unreachable code error
                    // value={peopleInfo[item.id]}
                    // style={{ margin: "20px" }}
                    type="checkbox"
                  />
                  <td style={{ margin: "20px" }}>{item.name}</td>
                  <td style={{ margin: "20px" }}>{item.username}</td>
                  <td style={{ margin: "20px" }}>{item.email}</td>
                </div>
              );
            })}
          </tr>
        </table>
      </div>
    );
  }