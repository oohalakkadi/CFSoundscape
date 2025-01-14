using UnityEngine;

public class UserCalibration : MonoBehaviour
{
    public Transform userObject; 

    public void CalibratePosition()
    {
        // Reset the user's position to the origin
        userObject.position = Vector3.zero;
        Debug.Log("Calibration complete: User set to (0, 0, 0)");
    }
}
