using UnityEngine;

public class PingPong : MonoBehaviour
{
    [Header("Z Position Range")]
    [SerializeField] private float minZ = 12f;
    [SerializeField] private float maxZ = 28f;

    [Header("Movement Speed")]
    [SerializeField] private float speed = 1f;

    void Update()
    {
        // currentZ will move between 0 and (maxZ - minZ)
        float currentZ = Mathf.PingPong(Time.time * speed, maxZ - minZ) + minZ;

        // Update the GameObject's position
        Vector3 position = transform.position;
        position.z = currentZ;
        transform.position = position;
    }
}
