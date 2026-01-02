import { useCallback, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import years, { isCompleted } from "../lib/resolutions";

export default function Home() {
  const [resolutionsIndex, setResolutionsIndex] = useState(0);
  const { resolutions, year } = years[resolutionsIndex];
  const maxIndex = years.length - 1;

  const applyDiff = useCallback(
    (diff: number) => {
      const nextVal = resolutionsIndex + diff;
      setResolutionsIndex(Math.max(0, Math.min(maxIndex, nextVal)));
    },
    [resolutionsIndex, maxIndex]
  );

  return (
    <>
      <Head>
        <title>Val&apos;s {year} Resolutions</title>
        <meta
          name="description"
          content={`Val Hovey's ${year} New Years Resolutions`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Val&apos;s {year} Resolutions</h1>
          {years.length > 1 && (
            <div className={styles.navigation}>
              <button
                disabled={resolutionsIndex === 0}
                type="button"
                aria-label="See previous year's resolutions."
                onClick={() => applyDiff(-1)}
              >
                ← Previous
              </button>
              <button
                disabled={resolutionsIndex === maxIndex}
                type="button"
                aria-label="See next year's resolutions."
                onClick={() => applyDiff(1)}
              >
                Next →
              </button>
            </div>
          )}
          <hr />
          <div className={styles.resolutions}>
            {resolutions.map((resolution) => (
              <div className={styles.resolution} key={resolution.name}>
                <span className={styles.resolutionTitle}>
                  {resolution.name}
                </span>
                <div className={styles.progressContainer}>
                  <div className={styles.progressBarContainer}>
                    <div
                      className={
                        isCompleted(resolution)
                          ? styles.progressBarCompleted
                          : styles.progressBar
                      }
                      style={{
                        width: `${Math.round(
                          Math.min(
                            (100 * resolution.progress) / resolution.goal,
                            100
                          )
                        ).toFixed()}%`,
                      }}
                    />
                  </div>
                  <div className={styles.progressDescription}>
                    <span className={styles.progressAmount}>
                      {resolution.redacted ? "█" : resolution.progress}
                    </span>
                    <span className={styles.progressUnits}>
                      {resolution.progress > 1 || resolution.progress === 0
                        ? resolution.plural
                        : resolution.unit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
