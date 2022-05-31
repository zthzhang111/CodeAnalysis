[
    {
        "name": "【Go】基础安全",
        "description": "go安全扫描规则包",
        "revision": null,
        "package_type": "official",
        "languages": [
            "go"
        ],
        "labels": [
            "安全"
        ],
        "checkrule_set": [
            {
                "checktool": "semgrep",
                "checkrule": "avoid-bind-to-all-interfaces",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "avoid-ssh-insecure-ignore-host-key",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "bad-tmp-file-creation",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "cookie-missing-secure",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "dangerous-command-write",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "dangerous-exec-cmd",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "dangerous-exec-command",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "dangerous-execution",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "dangerous-syscall-exec",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "dynamic-httptrace-clienttrace",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "formatted-template-string",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "go-insecure-templates",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "gosql-sqli",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "grpc-client-insecure-connection",
                "severity": "error",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "grpc-server-insecure-connection",
                "severity": "error",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "handler-assignment-from-multiple-sources",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "handler-attribute-read-from-multiple-sources",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "handler-attribute-read-from-multiple-sources-dict",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "hardcoded-jwt-key",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "import-text-template",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "insecure-module-used",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "jwt-go-none-algorithm",
                "severity": "error",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "jwt-go-parse-unverified",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "math-random-used",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "missing-ssl-minversion",
                "severity": "error",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "no-direct-write-to-responsewriter",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "no-fprintf-to-responsewriter",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "no-interpolation-in-tag",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "no-interpolation-js-template-string",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "no-io-writestring-to-responsewriter",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "no-printf-in-responsewriter",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "path-traversal-inside-zip-extraction",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "pg-orm-sqli",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "potential-dos-via-decompression-bomb",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "reflect-makefunc",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "session-cookie-missing-httponly",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "session-cookie-missing-secure",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "ssl-v3-is-insecure",
                "severity": "error",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "string-formatted-query",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "tls-with-insecure-cipher",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "unescaped-data-in-htmlattr",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "unescaped-data-in-js",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "unescaped-data-in-url",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "unsafe-reflect-by-name",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "unsafe-template-type",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "use-of-DES",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "use-of-unsafe-block",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "use-of-weak-rsa-key",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "use-tls",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            },
            {
                "checktool": "semgrep",
                "checkrule": "wip-xss-using-responsewriter-and-printf",
                "severity": "warning",
                "rule_params": null,
                "state": "enabled"
            }
        ],
        "open_saas": true,
        "envs": null
    }
]