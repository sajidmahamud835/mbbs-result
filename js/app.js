let results = "";
fetch('https://cdn.jsdelivr.net/gh/sajidmahamud835/mbbs-result/data.json')
    .then(response => response.json())
    .then(data => results = data);

search = (roll) => {
    const found = results.map(result =>
        result.roll.find(res => res === roll)
    );
    for (let i = 0; i < found.length; i++) {
        const element = found[i];
        if (element != undefined) {
            return results[i].college;
        }

    }
    return false;
}

showResult = (firstName, lastName, roll, college) => {
    console.log(firstName, lastName, roll, college)
    if (college != false) {
        document.getElementById("result").innerHTML = `
        <div>
            <h1 class="text-center text-primary">Congratulation ${firstName + " " + lastName}!</h1>
            <p class="text-center"> You got selected for <span class="text-info"> ${college} </span>.</p>
            <div class="d-flex">
                <img width="400px" height="400px" class="w-50 mx-auto my-3"
                    src="https://cdn.pixabay.com/photo/2016/04/01/09/51/boy-1299626_960_720.png" alt=""
                    srcset="">
            </div>
            <a onclick="handelViewBtn()" class="btn btn-success m-2" id="btn" type="submit">View Merit Position & Marks</a>
            <a onclick="handelDownloadBtn()" class="btn btn-danger m-2" id="btn" type="submit">PDF Merit List</a>
        </div>
    `;
    }
    else {
        document.getElementById("result").innerHTML = `
        <div>
            <h1 class="text-center text-primary">Sorry ${firstName + " " + lastName}!</h1>
            <p class="text-center text-danger"> Unfortunately, you haven't got selected for any government medical college.</p>
            <div class="d-flex">
                 <img width="400px" height="400px" class="w-50 mx-auto my-3"
                src="https://cdn.pixabay.com/photo/2021/11/20/03/38/girl-6810780_960_720.png" alt=""
                srcset="">
            </div>
            <a onclick="handelViewBtn()" class="btn btn-success m-2" id="btn" type="submit">View Merit Position & Marks</a>
            <a onclick="handelDownloadBtn()" class="btn btn-danger m-2" id="btn" type="submit">PDF Merit List</a>
        </div>
    `
    }

}

handelViewBtn = () => {
    window.location.href = "https://result.dghs.gov.bd/mbbs/";
}

handelDownloadBtn = () => {
    window.location.href = "https://old.dghs.gov.bd/images/docs/Notice/notice_5_4_2022_MBBS.pdf";
}

searchHandeler = (firstName, lastName, roll) => {
    roll = parseInt(roll);
    result = search(roll);
    document.getElementById("default").style.display = "none";
    showResult(firstName, lastName, roll, result);

}

handelSearchBtn = () => {
    console.log('searching...')
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const roll = document.getElementById("roll").value;
    searchHandeler(firstName, lastName, roll)
    return console.log('finished');
}