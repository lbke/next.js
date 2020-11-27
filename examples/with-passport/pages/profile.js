import { useUser } from '../lib/hooks'
import Layout from '../components/layout'

const Profile = () => {
  const user = useUser({ redirectTo: '/login' })

  return (
    <>
      <h1>Profile</h1>
      {user && <p>Your session: {JSON.stringify(user)}</p>}
    </>
  )
}

export default Profile
