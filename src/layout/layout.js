import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {

  return (
    <div className="flex h-screen bg-gray-300">
      <div className="m-auto bg-white rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
       {/* lef */}
        <div className={styles.imgStyle}>
          <div className={styles.caartonImg}></div>
        </div>
        {/* rigth */}
        <div className="right flex flex-col justify-evenly bg-white">
          <div className="text-center py-10">
            {children}
          </div>
        </div>
      </div>
   
    </div>
  )
}