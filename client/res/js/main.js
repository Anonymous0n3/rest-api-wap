const info = document.getElementById('info');
const RunTest = document.getElementById('info');

async function RunTest1() {
    try {
        const res = await fetch('http://127.0.0.1:3000/user/mojeid', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET",
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${data.mojeid}</p>`;
        info.innerHTML += `<p style="color: green">OK</p>`
    } catch (error) {
        info.innerText = error;
    }

}

async function RunTest2() {
    try {
        const res = await fetch('http://127.0.0.1:3000/article/java/oop', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const data = await res.json();
        info.innerHTML += `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${data.id}</p>`;
        info.innerHTML += `<p style="color: green">OK</p>`
    } catch (error) {
        info.innerText = error;
    }
}

async function RunTest3() {
    try {
        const res = await fetch('http://127.0.0.1:3000/comment/ixd222', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const data = await res.json();
        info.innerHTML += `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${data.id}</p>`;
        info.innerHTML += `<p style="color: green">OK</p>`
    } catch (error) {
        info.innerText = error;
    }
}

async function RunTest4() {
    try {
        const res = await fetch('http://127.0.0.1:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ payload: { name: "petr", age: "18" } })
        });
        const data = await res.json();
        console.log(data);
        info.innerHTML += `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
        info.innerHTML += `<p style="color: green">OK</p>`
    } catch (error) {
        info.innerText = error;
    }
}

async function RunTest5() {
    try {
        const res = await fetch('http://127.0.0.1:3000/article', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ payload: { title: "oop", category: "java" } })
        });
        const data = await res.json();
        console.log(data);
        info.innerHTML += `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
        info.innerHTML += `<p style="color: green">OK</p>`
    } catch (error) {
        info.innerText = error;
    }
}

async function RunTest6() {
    try {
        const res = await fetch('http://127.0.0.1:3000/category', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ payload: { name: "java" } })
        });
        const data = await res.json();
        console.log(data);
        info.innerHTML += `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
        info.innerHTML += `<p style="color: green">OK</p>`
    } catch (error) {
        info.innerText = error;
    }
}

async function RunTest7() {
    try {
        const res = await fetch('http://127.0.0.1:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({ payload: { name: "Radek", age: "20" } })
        });
        const data = await res.json();
        info.innerHTML += `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
        info.innerHTML += `<p style="color: green">OK</p>`
    } catch (error) {
        info.innerText = error;
    }
}

async function RunTest8() {
    try {
        const res = await fetch('http://127.0.0.1:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify({ payload: { id: "123aswq12", name: "Radek" } })
        });
        const data = await res.json();
        info.innerHTML += `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
        info.innerHTML += `<p style="color: green">OK</p>`
    } catch (error) {
        info.innerText = error;
    }
}

async function RunTest9() {
    try {
        const res = await fetch('http://127.0.0.1:3000/article', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify({ payload: { id: "123aswq12" } })
        });
        const data = await res.json();
        info.innerHTML += `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
        info.innerHTML += `<p style="color: green">OK</p>`
    } catch (error) {
        info.innerText = error;
    }
}

RunTest.onload = RunTest1(),
    RunTest2(),
    RunTest3(),
    RunTest4(),
    RunTest5(),
    RunTest6(),
    RunTest7(),
    RunTest8(),
    RunTest9()