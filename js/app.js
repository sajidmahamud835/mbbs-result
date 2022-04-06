const results =
    [
        {
            college: "Abdul Malek Ukil Medical College, Noakhali",
            roll: [
                1300278, 1302770, 1500622, 1501039, 1502156, 1503373, 1504715, 1505029,
                1505604, 1505866, 1508388, 1508852, 1511109, 1511805, 1511860, 1803454,
                1803965, 1804199, 1804578, 1805856, 1900203, 1905664, 1905979, 1911223,
                1912867, 1915291, 1917449, 2101191, 2400080, 2404330, 2600174, 2600231,
                2600509, 2601190, 2601904, 2602017, 2602363, 2602975, 2604823, 2605856,
                2606961, 2607110, 2702595, 2702971, 2703832, 2704403, 2705994, 3308824,
                3502810, 3503771, 3504491, 3506711, 3800381, 3801951, 3803688, 3804405,
                3806694, 3806793, 3807218, 3809317, 3809473, 3810405, 3813766, 4102093,
                4601470, 9901718, 9903503, 9905799, 9907956, 9909386
            ]
        },
        {
            college: "Bangabandhu Medical College, Sunamganj",
            roll: [
                1301840, 1502851, 1503719, 1509898, 1512091, 1802450, 1904097, 1906445,
                1908926, 1909908, 1912396, 1912631, 1913907, 1917642, 1919133, 2101446,
                2101737, 2102213, 2104112, 2300974, 2301391, 2301695, 2400023, 2400379,
                2401685, 2401891, 2403119, 2403150, 2404638, 2603779, 2603793, 2605561,
                2700177, 3503158, 3804929, 3806184, 3807872, 3807993, 3808639, 3810072,
                3900178, 4101328, 4202313, 4202526, 4600396, 4705534, 9900835, 9903002,
                9905535, 9908593
            ]

        },
    ]

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