using UnityEngine;

public class UserMovement : MonoBehaviour
{
    public float movementSensitivity = 0.1f; // Adjust movement sensitivity
    public float rotationSensitivity = 2.0f; // Adjust rotation sensitivity

    private Quaternion initialRotation; // To store the initial gyroscope rotation

    void Start()
    {
        // Enable the gyroscope
        if (SystemInfo.supportsGyroscope)
        {
            Input.gyro.enabled = true;
            initialRotation = Input.gyro.attitude; // Store the starting orientation
        }
        else
        {
            Debug.LogWarning("Gyroscope not supported on this device.");
        }
    }

    void Update()
    {
        // Accelerometer for movement
        Vector3 acceleration = Input.acceleration;
        Vector3 deltaMovement = new Vector3(acceleration.x, 0, acceleration.z) * movementSensitivity;
        transform.position += deltaMovement;

        // Gyroscope for rotation
        if (SystemInfo.supportsGyroscope)
        {
            Quaternion deviceRotation = Input.gyro.attitude; // Get current rotation
            Quaternion correctedRotation = Quaternion.Inverse(initialRotation) * deviceRotation; // Relative rotation
            transform.rotation = correctedRotation * Quaternion.Euler(90, 0, 0); // Adjust for device orientation
        }
    }
}
