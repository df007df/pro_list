        app_path = "/home/saas/tool/pro_list"

        listen 3000 # by default Unicorn listens on port 8080
        worker_processes 1 # this should be >= nr_cpus
        pid "#{app_path}/tmp/pids/unicorn.pid"
        stderr_path "#{app_path}/log/unicorn.log"
        stdout_path "#{app_path}/log/unicorn.log"
