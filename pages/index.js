export default function Home() {
  return (
    <div style={{fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "auto"}}>

      <h1>Rai Trabelsi - Cloud & Infrastructure Engineer</h1>
      <p>
        I design and operate high-availability systems, secure networks,
        and AI-assisted infrastructure for real-world environments.
      </p>

      <hr />

      <h2>🚀 Featured Projects</h2>

      <h3>🏗️ Micro Data Center (HA Infrastructure)</h3>
      <p>
        Built a full on-premise infrastructure with VLAN segmentation, Proxmox cluster,
        and HAProxy load balancing.
      </p>
      <ul>
        <li>10+ VLANs configured</li>
        <li>Failover under 5 seconds</li>
        <li>Multi-node virtualization</li>
      </ul>

      <h3>🤖 AI Ops Assistant</h3>
      <p>
        AI system analyzing logs and detecting anomalies in infrastructure.
      </p>
      <ul>
        <li>Real-time anomaly detection</li>
        <li>AI-based troubleshooting</li>
      </ul>

      <h3>☸️ Kubernetes / Swarm HA Cluster</h3>
      <p>
        Multi-node container orchestration with load balancing and zero downtime.
      </p>

      <hr />

      <h2>🧠 Skills</h2>
      <ul>
        <li><b>Infrastructure:</b> Proxmox, Linux, Virtualization</li>
        <li><b>Networking:</b> VLANs, pfSense, Routing</li>
        <li><b>DevOps:</b> Docker, Kubernetes</li>
        <li><b>AI:</b> LLMs, automation</li>
      </ul>

      <hr />

      <h2>📬 Contact</h2>
      <p>Email: your@email.com</p>
      <p>GitHub: https://github.com/yourprofile</p>

    </div>
  );
}
