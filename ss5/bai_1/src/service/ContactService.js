const contacts =[{
    name: "",
    email: "",
    phone:"",
    message: ""
}]
export const saveContact = (contact) => {
    contacts.push(contact);
}