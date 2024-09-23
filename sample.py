import tkinter as tk
from tkinter import messagebox
import speech_recognition as sr

# Function to perform speech recognition
def recognize_speech():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Adjusting for ambient noise... Please wait.")
        recognizer.adjust_for_ambient_noise(source, duration=1)
        print("Listening for speech...")
        audio = recognizer.listen(source)

    try:
        # Recognize speech using Google Web Speech API
        print("Recognizing speech...")
        recognized_text = recognizer.recognize_google(audio)
        print(f"You said: {recognized_text}")

        # Check if the recognized word is correct (set "hello" as the correct word for verification)
        if recognized_text.lower() == "hello":
            messagebox.showinfo("Success", "Word verified successfully!")
        else:
            messagebox.showwarning("Failure", "Word verification failed. Try saying 'hello'.")

    except sr.UnknownValueError:
        messagebox.showerror("Error", "Could not understand the audio.")
    except sr.RequestError as e:
        messagebox.showerror("Error", f"Could not request results from the speech recognition service; {e}")

# Function to handle button click
def on_login_button_click():
    recognize_speech()

# Create the GUI window
root = tk.Tk()
root.title("Speech Recognition Login")

# Create a login button
login_button = tk.Button(root, text="Login", command=on_login_button_click, padx=20, pady=10)
login_button.pack(pady=20)

# Run the GUI loop
root.mainloop()
