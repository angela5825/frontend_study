// 컴포넌트로 이용할게 아니다..
import styles from "./Card.module.css";

// 고차 컴포넌트 (HOC , High-order Component)
/* 
- 컴포넌트를 인자로 받아 새로운 컴포넌트를 반환하는 함수
여러 종류의 컴포넌트에 공통 기능을 부여
- 과거에는 많이 사용되었지만 최근에는 HOC 대신 커스텀 훅을 더 많이 사용

사용 이유

1. 코드의 재사용
- 동일한 기능(예 : 인증 체크, 로깅)을 여러 컴포넌트에서 중복 작성할 필요 없이 재상 가능

2. 관심사 분리
- UI 로직과 부가적인 로직으르 분리하여 코드를 깔끔하게 유지

3. 조건부 렌더링
- 인증된 사용자만 특정 페이지를 볼 수 있도록 접근 제어 가능 


*/

function withConditionalCard(WrappedComp) {
  return function ConditionalCard({ disabled, ...props }) {
    const cardStyle = {
      opacity: disabled ? 0.5 : 1,
    };
    return (
      <div className={styles.card} style={cardStyle}>
        <WrappedComp {...props} />
      </div>
    );
  };
}

export default withConditionalCard;
