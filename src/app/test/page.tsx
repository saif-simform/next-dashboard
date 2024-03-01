
const Page = () => {

    const handleForm = async (formData: any) => {
        "use server"
        console.log("hello", formData)
    }
    return (
        <div>
            <form action={handleForm}>
                <input type="text" name="username" placeholder="username" />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Page