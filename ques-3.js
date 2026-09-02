const validateUsername = (username) => {
        if(username.length < 4)
        {
            return "Too Short";
        }
        else if(username.includes(" "))
        {
            return "No Space Allowed";
        }
        else if(username.includes("admin"))
        {
            return "Reserved Word";
        }
        else
        {
            return "Available";
        }
    }
    
    console.log(validateUsername("confusedaf1234"));
    console.log(validateUsername("admin321"));
    console.log(validateUsername("ab"));
    console.log(validateUsername("a b"));
    console.log(validateUsername("shawon islam"));