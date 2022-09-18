function doTask1(value) {
  return new Promise((resolve, reject) => {
    if (value === "resolve1") {
      resolve(value);
    } else {
      reject(value);
    }
  });
}

function doTask2(response) {
  return new Promise((resolve, reject) => {
    if (response === "resolve1") {
      resolve("resolve2");
    } else {
      reject("reject2");
    }
  });
}

function* doTask3() {
  console.log("function 3 ");
}

async function finalCall() {
  const res = await doTask1("resolve1");
  console.log(res);

  const res2 = await doTask2(res);
  console.log(res2);
  const res3 = doTask3();
  res3.next();
}

finalCall();
