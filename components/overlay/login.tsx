import useLogin from "@/hooks/useLogin"
import useMainPlayer from "@/hooks/useMainPlayer"
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey, user.existed])

  return (
    <>
      {!logedIn && (
        <div className={clsx("modal", "modal-open")}>
          <div className="modal-box ">
            <h3 className="font-bold text-lg">Guac morning 🥑!</h3>
            <p className="pt-4 text-primary-content/60">
              Let focking $GUAC. Go collect the ingredients to cook a parfaite healthy avocado. Get rank and rewards in
              $GUAC!
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
