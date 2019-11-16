const fetch = require('node-fetch');
import data from './data'

let apiData = data.splice();

dataLogic.getAllContacts = () => {
    return apiData;
}

dataLogic.getSingleContact = (id) => {
    return apiData.find(each => {
        return each.id == id;
    })
}

dataLogic.AddContact = (data) => {
    apiData.push(data)
}

dataLogic.updateContact = (data) => {
    apiData.forEach((each) => {
        if (each.id == data.id) {
            each.name = data.name;
            each.email = data.email;
        }
    });
}

dataLogic.deleteContact = (id) => {
    apiData.remove((each) => { return each.id == id; });
}






module.exports = dataLogic;