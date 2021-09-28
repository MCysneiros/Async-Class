const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  console.log('Getting position....');
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // .then((posData) => {
  //   positionData = posData;
  //   return setTimer(2000);
  // })
  // .catch((error) => console.log(error))
  // .then((data) => console.log(data, positionData));

  // setTimer(1000).then(() => console.log('Timer done'));
}

button.addEventListener('click', trackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then((data) => console.log(data));

// Promise.all([getPosition(), setTimer(1000)]).then((promiseData) =>
//   console.log(promiseData)
// );

Promise.allSettled([getPosition(), setTimer(1000)]).then((promiseData) =>
  console.log(promiseData)
);
// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
