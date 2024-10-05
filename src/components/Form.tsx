import FormButton from "./FormButton"

const Form = () => {

  const myAction = async (formData: any) => {
    await new Promise(r => setTimeout(r, 2000))
    const newPost = {
      name: formData.get('name'),
      email: formData.get('email')
    }
    console.log(newPost)
  }

  return (
    <form action={myAction}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="border-2"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="border-2"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <FormButton />
    </form>

  )
}
export default Form