using System.Collections;
using UnityEngine;

public class TVProximity : MonoBehaviour
{
    [SerializeField] private LayerMask musicLayer;
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private float delayTime = 5f;
    [SerializeField] private float cooldownTime = 300f;

    // Tracks whether the player is in the music range
    private bool inMusicLayer = false;
    // Prevents audio from playing repeatedly within the cooldown
    private bool isCooldownActive = false;
    // Reference to our active coroutine (if any)
    private Coroutine checkPlayerStayCoroutine;

    private void Update()
    {
        // Check if the player is inside the music layer radius
        bool isInMusicRange = Physics.CheckSphere(transform.position, 1f, musicLayer);

        // Player just entered music range
        if (isInMusicRange && !inMusicLayer && !isCooldownActive)
        {
            inMusicLayer = true;
            checkPlayerStayCoroutine = StartCoroutine(WaitAndPlayAudio());
        }
        // Player just left music range
        else if (!isInMusicRange && inMusicLayer)
        {
            inMusicLayer = false;

            // If we were still waiting to confirm the player was inside long enough, cancel that wait
            if (checkPlayerStayCoroutine != null)
            {
                StopCoroutine(checkPlayerStayCoroutine);
                checkPlayerStayCoroutine = null;
            }
        }
    }

    private IEnumerator WaitAndPlayAudio()
    {
        // Wait the specified delay
        yield return new WaitForSeconds(delayTime);

        // Only play audio if still in the music layer
        if (inMusicLayer)
        {
            audioSource.Play();

            // Begin cooldown
            isCooldownActive = true;
            // Wait out the cooldown
            yield return new WaitForSeconds(cooldownTime);
            // Cooldown finished
            isCooldownActive = false;
        }

        checkPlayerStayCoroutine = null;
    }
}
