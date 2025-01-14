using UnityEngine;

public class MotionController : MonoBehaviour
{
    public Transform playerTransform; // The user's in-game representation
    public float speed = 5f;          // Movement speed
    public float rotationSpeed = 100f; // Turning speed

    private Vector3 velocity;         // Current velocity

    void Start()
    {
        Input.gyro.enabled = true; // Enable gyro for rotation input
    }

    void Update()
    {
        // Get phone's acceleration
        Vector3 acceleration = Input.acceleration;

        // Forward/backward movement based on Y acceleration
        velocity.z = acceleration.y * speed;

        // Turning (left/right) based on X tilt
        float turnAngle = acceleration.x * rotationSpeed * Time.deltaTime;
        playerTransform.Rotate(0, turnAngle, 0);

        // Apply movement on the XZ plane (ignore Y completely)
        Vector3 move = playerTransform.forward * velocity.z * Time.deltaTime;
        playerTransform.position += new Vector3(move.x, 0, move.z); // Keep Y axis constant
    }

    public void Calibrate()
    {
        // Set the current position and rotation as the origin
        playerTransform.position = new Vector3(playerTransform.position.x, 0, playerTransform.position.z);
    }
}
