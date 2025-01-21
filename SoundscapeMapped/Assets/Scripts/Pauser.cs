using UnityEngine;
using UnityEngine.SceneManagement;

public class Pauser : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private GameObject pauseMenuPanel;

    private bool isPaused = false;

    void Update()
    {
        // Toggle pause with the Escape key
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            if (isPaused)
            {
                ResumeGame();
            }
            else
            {
                PauseGame();
            }
        }
    }

    public void PauseGame()
    {
        // Show the Pause Menu UI
        pauseMenuPanel.SetActive(true);

        // Stop in-game time
        Time.timeScale = 0f;

        // **Pause all audio**
        AudioListener.pause = true;

        // Optionally unlock and show the cursor
        Cursor.lockState = CursorLockMode.None;
        Cursor.visible = true;

        isPaused = true;
    }

    public void ResumeGame()
    {
        // Hide the Pause Menu UI
        pauseMenuPanel.SetActive(false);

        // Resume in-game time
        Time.timeScale = 1f;

        // **Unpause all audio**
        AudioListener.pause = false;

        // Optionally re-lock and hide the cursor
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;

        isPaused = false;
    }

    public void QuitToMainMenu()
    {
        // Restore timescale before leaving the scene
        Time.timeScale = 1f;
        AudioListener.pause = false;

        SceneManager.LoadScene("Menu");

        // Or quit the application if this is the final exit
        // Application.Quit();
    }
}
