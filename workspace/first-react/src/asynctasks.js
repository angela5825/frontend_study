export function rollDice() {
  // 주사위를 굴리는 함수
  // 비동기로 작동 -> promise를 이용

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 2%의 확률로 실패할 수 있다.
      if (Math.random() < 0.2) {
        reject(new Error("Failed to roll Dice"));
      } else {
        resolve(Math.floor(Math.random() * 6) + 1);
      }
    }, 500);
  });
}

export function updateName(newName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`✅ ${newName}`);
    }, 1000);
  });
}
