// Add a class
export const addClass = async classData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/class`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(classData),
    })
  
    const data = await response.json()
    return data
  }

// Add a select class by student 
export const selectClass = async classData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/selectClass`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(classData),
    })
  
    const data = await response.json()
    return data
  }

// Update a class by Instructor
export const updateAClass = async (classData, id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/update-class/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(classData),
  })

  const data = await response.json()
  return data
};


// Give feedback a class by admin by feedback massage
export const feedbackAClass = async (classData, id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/class/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
    body: JSON.stringify(classData),
  })

  const data = await response.json()
  return data
};


//Delete a class to database
export const deleteAClass = async (id) => {
  await fetch(`${import.meta.env.VITE_API_URL}/delete-class/${id}`, {
    method: "DELETE",
  });
};