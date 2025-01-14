using UnityEngine;

public class MotionController : MonoBehaviour
{
    public Transform playerTransform; // The user’s in-game representation
    public float sensitivity = 10f;  // Adjust for movement speed

    private Vector3 initialPosition;

    void Start()
    {
        Input.gyro.enabled = true;
        initialPosition = Vector3.zero;
    }

    void Update()
    {
        // Capture motion input
        Vector3 motion = Input.acceleration * sensitivity;

        // Update position based on motion
        playerTransform.position = new Vector3(
            initialPosition.x + motion.x,
            playerTransform.position.y,
            initialPosition.z + motion.y
        );
    }

    public void Calibrate()
    {
        // Save the current position as the origin
        initialPosition = playerTransform.position;
    }
}
