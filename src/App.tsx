import ForecastSection from './components/ForecastSection/ForecastSection'
import MainSection from './components/MainSection/MainSection'
import MapSection from './components/MapSection/MapSection'
import NavBar from '@/components/NavBar/NavBar'
import NewsSection from '@/components/NewsSection/NewsSection'
import styles from "./App.module.css";

function App() {
  return (
   <>
   <NavBar />
      <main className={styles.main}>
        <div className={styles.leftColumn}>
          <MainSection />
          <ForecastSection />
          <MapSection />
        </div>
        <div className={styles.rightColumn}>
          <NewsSection />
        </div>
      </main>
   </>
  )
}

export default App
