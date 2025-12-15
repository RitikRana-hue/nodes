module.exports = {
    apps: [
        {
            name: 'nodesio',
            script: 'server.js',
            instances: 'max',
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'production',
                PORT: 8080,
                HOSTNAME: '0.0.0.0'
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: process.env.PORT || 8080,
                HOSTNAME: process.env.HOSTNAME || '0.0.0.0'
            },
            error_file: './logs/err.log',
            out_file: './logs/out.log',
            log_file: './logs/combined.log',
            time: true,
            max_memory_restart: '1G',
            node_args: '--max_old_space_size=4096'
        }
    ]
};