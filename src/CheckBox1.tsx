import React, { createRef, useEffect, useRef, useState } from "react";
export default function Notification({ closeNotificationModal }: any) {
  const [users, setUsers] = useState<any>();
  const [peopleInfo, setPeopleInfo] = useState<any>([]);
  console.log(peopleInfo)
  function onSubmitHandler(e:any) {
    send(e);
    closeNotificationModal(false)
  }
  useEffect(() => {
    getUsers();
  }, []);
  async function getUsers() {
            const response=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await response.json(); 
            console.log(data)
    setUsers(data);
  }
//   let inputValue: any = createRef();
  let messageValue: any = createRef();
  console.log(messageValue)
//   function search() {
//     let searchValue = inputValue.current.value;
//     console.log(searchValue);
//   }
const responseBody: any = {}
// let data:any={
//     id:peopleInfo,
// }
// console.log(data)
// // const data={
// //     id:peopleInfo,
// //     message:messageValue.current
// // }
// console.log(data)
  async function send(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget as HTMLFormElement)
    console.log(formData,event.currentTarget)
    formData.forEach((value, property: string) =>
    {
    responseBody[property] = value});
    // formData.append("usersId",peopleInfo)
    // console.log(responseBody)
    const form:any={
        "id":peopleInfo,
        "email":responseBody.message
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": `123456`,
        },
        body:JSON.stringify(form)
    });
    console.log(response)
    console.log(form)
  }
  return (
    <div id="notification" >
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          {users &&
            users.map((user: any) => {
              return (
                <span>
                  <input
                    onChange={(e) => {
                      console.log(e.target.checked)
                      if (e.target.checked) {
                        setPeopleInfo([
                          ...peopleInfo,user.id,
                        ]);
                      } else {
                        setPeopleInfo(
                          peopleInfo.filter(
                            (people: any) => people !== user._id
                          )
                        );
                      }
                    }}
                    value={peopleInfo}
                    style={{ margin: "20px" }}
                    type="checkbox"
                  />
                  {user.name}
                </span>
              );
            })}
        </div>
        <div>
          <input
            type="text"
            placeholder="Type your message here...."
            name="message"
            ref={messageValue}
          />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
    </div>
  );
}