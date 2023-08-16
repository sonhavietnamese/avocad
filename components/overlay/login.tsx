import useLogin from "@/hooks/useLogin"
import useMainPlayer from "@/hooks/useMainPlayer"
import { formatAddress } from "@/utils"
import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import clsx from "clsx"
import { useEffect } from "react"

export default function Login() {
  const { setVisible } = useWalletModal()
  const { publicKey } = useWallet()
  const user = useMainPlayer()
  const [logedIn, login, logout] = useLogin((s) => [s.logedIn, s.login, s.logout])

  useEffect(() => {
    if (!publicKey) return

    user.checkExisted(publicKey.toString())
    user.existed ? login() : logout()
  }, [publicKey, user.existed])

  useEffect(() => {
    if (!publicKey) return

    user.create(formatAddress(publicKey.toString()), publicKey.toString())
    login()
  }, [publicKey])

  return (
    <>
      {!logedIn && (
        <div className={clsx("modal", "modal-open")}>
          <div className="modal-box ">
            <h3 className="font-bold text-lg">Guac morning 🥑!</h3>
            <p className="pt-4">
              Just one step before you in. Make sure you&apos;re on <kbd className="kbd kbd-md">Devnet</kbd>
            </p>

            <div className="modal-action">
              <button
                className="btn btn-primary hover:cursor-c-pointer active:cursor-c-pointer-clicked normal-case"
                onClick={() => setVisible(true)}
              >
                Let GUAC
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// if (!snapshot.val()) {
//   set(ref(database, `players/${publicKey.toString()}`), {
//     position: {
//       x: 0,
//       y: 0,
//       z: 0,
//     },
//     quaternion: {
//       x: 0,
//       y: 0,
//       z: 0,
//       w: 0,
//     },
//     username: mainUsername,
//     animation: "idle",
//   })
//   setExisted(true)
// } else {
//   setExisted(true)
//   setMainUsername(snapshot.val().username)
// }