import Card from './Card'
import styles from './Timecard.module.css'

const TimeCardContainer = () => {
    return (
        <div className={styles.timecardContainer}>
            <Card className={styles.card}>
                <h2 className={styles.cardText}>Time Card Tool</h2>
                <div className={styles.featureDiv}>
                    <Card className={styles.shiftCalculatorCard}></Card>
                    <Card className={styles.clockOutCalculatorCard}></Card>
                </div>
            </Card>
        </div>
    )
}

export default TimeCardContainer;