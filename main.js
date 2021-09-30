Moralis.initialize("Pm8f6IIpnNo5erE2ipcrk7UIlVGmuula86v8rV8P"); // Application id from moralis.io
Moralis.serverURL = "https://x4lgzawnxc6u.moralishost.com:2053/server"; //Server url from moralis.io

async function login() {
    try {
        currentUser = Moralis.User.current();
        if(!currentUser){
            currentUser = await Moralis.Web3.authenticate();
        }
    } catch (error) {
        console.log(error);
    }
}

function openModel() {
    document.getElementById("token_model").style.display = "block";
}

document.getElementById("from_token_select").onclick = openModel;
document.getElementById("login_button").onclick = login;