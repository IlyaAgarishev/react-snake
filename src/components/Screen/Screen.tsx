import { useAppSelector } from "../../hooks/reduxHooks";
import useTurnOnGameboy from "../../hooks/useTurnOnGameboy";
import ContinueScreen from "../ContinueScreen";
import GameplayScreen from "../GameplayScreen";
import styles from "./Screen.module.css";

const Screen = () => {
  const snakeHasFailed = useAppSelector(
    (state) => state.snakeReducer.snakeHasFailed
  );

  // TODO: попробовать заменить на react-transition-group
  const { batteryIsActivated, screenIsActivated } = useTurnOnGameboy();

  return (
    <div className={styles.screenWrapper}>
      <div
        className={styles.battery}
        style={{ opacity: batteryIsActivated ? "1" : "0" }}
      />
      <div
        className={styles.screen}
        style={{ opacity: screenIsActivated ? "1" : "0" }}
      >
        {screenIsActivated && (
          <>
            {snakeHasFailed && <ContinueScreen />}
            <GameplayScreen blur={snakeHasFailed} />
          </>
        )}
      </div>
    </div>
  );
};

export default Screen;
