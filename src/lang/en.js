export default {
    login: {
        user: "User",
        password: "Password",
        verificationCode: "Verification Code",
        login: "Login"
    },
    inputText: {
        user: "Please Enter User",
        password: "Please Enter Password",
        verificationCode: "Please enter verificationCode",
        blockInput: "Please enter block hash or block height",
        contractSearch: "Please enter the contract name or address",
        transactionSearch: "Please enter a transaction hash or block height"
    },
    text: {
        reqOvertime: "Request Timeout",
        loginFail: "Landing Failed",
        systemError: "Yystem Error",
        copy: "Copy",
        arrow: "Arrow",
        copyErrorMsg: "Key is empty, do not copy.",
        copySuccessMsg: "Copy Success",
        copyHash: "Copy Hash",
        total: "Total",
        tiao: "",
        blockSearchMsg: "Search block hash does not support fuzzy query",
        delete: "Delete",
        update: "Update",
        confirmDelete: "Are you sure to delete?",
        sure: "Ok",
        cancel: "Cancel",
        select: "Please select",
        tips: "Tips",
        updateSuccessMsg: "Update Success",
        save: "Save",
        compile: "Compile",
        deploy: "Deploy",
        send: "Send",
        selectSuccess: "Query Succeeded!",
        transactionSuccess: "Successful Transaction!",
        transactionFail: "Transaction Failed!",
        noData: "No Data",
        input: "Please Input",
        search: "Search",
        example: "For Example",
        implement: "Implement",
        implementResult: "Implement Result",
        confirmSubmit: "Confirm to submit?",
        addSuccess: "Added Successfully"
    },
    rule: {
        textLong: "1 to 32 characters in length",
        passwordError: "Login password error",
        loginPasswordType: "Please input the password correctly",
        ipName: "Please enter IP name",
        ipRule: "IP does not comply with rules",
        portName: "Please enter the port name",
        portLong: "1 to 12 digits in length",
        portRule: "Port does not comply with rules",
        agencyName: "Please enter the agency name",
        agencyLong: "1 to 16 digits in length",
        agencyRule: "Please input Chinese, English and numbers for agency name",
        adminRule: "Please select administrator account",
        nodeType: "Please select a node type",
        contractName: "Please enter the contract name",
        contractLong: "1 to 32 characters in length",
        contractRule: "Contract name does not conform to the rules",
        folderName: "Please enter a folder name",
        folderLong: "1 to 12 characters in length",
        folderRule: "Folder name does not conform to the rules",
        selectAdmin: "Please select an administrator",
        sqlRule: "Please input sql",
        outUserAddress: "Please select an external account address",
        configName: "Please select a configuration name",
        configValue: "Please enter the configuration value",
        configValueNumber: "Configuration value must be a number",
        accountRule: "User name can only enter letters and numbers",
        passwordLong: "6 to 12 characters in length",
        passwordRule: "Composed of letters, numbers, and at least one uppercase letter and one lowercase letter"
    },
    head: {
        helpText: "Help Document",
        group: "Groups",
        changePassword: "Change Password",
        exit: "Exit"
    },
    title: {
        dataOverview: "Overview",
        blockTitle: "Block Information",
        nodeTitle: "Node Mgmt",
        contractTitle: "Contract Mgmt",
        contractIDE: "Contract IDE",
        contractList: "Contract List",
        CNSmanager: "CNS Query",
        CNSTips: "CNS query Description: the contract naming service CNS provides the record of the mapping relationship between the contract name and the contract address on the chain and the corresponding query function, so that the caller can call the contract on the chain by remembering the simple contract name.",
        CRUDTips: "Crud Description: CRUD (add, delete, modify and query) can create tables and perform add, delete, modify and query operations on tables. Tips: if deployment and table creation permissions are enabled, the operation of table creation requires deployment and table creation permissions. Table permissions are required for deleting and modifying tables.",
        CRUDServiceManagement: "CRUD",
        PrivateKey: "Private Key Mgmt",
        systemManager: "System Mgmt",
        permission: "Privilege Mgmt",
        permissionTips: "Description of management authority: authority control is based on the access mechanism of external account (tx.origin), which controls the authority of contract deployment, table creation, table writing (insertion, update and deletion), and table reading is not controlled by authority.",
        permissionHref: "Specific documents: [permission control]",
        configManager: "Configuration Mgmt",
        configManagerTips: "System Configuration Management Description: System configuration can configure system property values (currently supports the settings of tx_count_limit and tx_gas_limit properties).",
        certificate: "Certificate Mgmt",
        accountManagement: "Privilege User",
        transactionAudit: "Transaction Audit",
        userTransaction: "User Transaction",
        unusualUser: "Unusual User",
        unusualContract: "Unusual Contract",
        transactionInfo: "Transaction Information",
        systemMonitor: "System Metrics",
        nodesMonitor: "Node Metrics",
        hostMonitor: "Host Metrics",
        emailAlarm: "Email alert config",
        emailAlarmType: "Alarm type config"
    },
    home: {
        nodes: "Node Count",
        contracts: "Deployed Contracts",
        blocks: "Blocks",
        transactions: "Transactions",
        nodeId: "Node ID",
        blockHeight: "Block Height",
        pbftView: "PbftView",
        status: "Status",
        block: "Block",
        transaction: "Transaction",
        tranfer: "Transfer",
        more: "More",
        run: "Run",
        unusual: "Unusual",
        chartTitle: "#Trancation",
        chartExplain: "transaction volume in the last 7 days",
        chartTransactions: "Transactions",
        blockHash: "Block Hash",
        createTime: "Create Time"
    },
    nodes: {
        nodeFront: "Node Preposition",
        addFront: "Add Front",
        frontId: "Front ID",
        ip: "IP",
        frontPort: "Front Port",
        agency: "Agency",
        modifyTime: "Modify Time",
        nodeStyle: "Node Type",
        operation: "Operation",
        sealer: "Sealer",
        observer: "Observer",
        remove: "Remove",
        deleteNode: "Delete Node",
        nodeList: "Node List",
        nodeDescription: "Node management Description: node types can be set through node management. Including: 1. Set the corresponding node as a consensus node according to the node node ID. 2. Set the corresponding node as the observation node according to the node nodeid. 3. Set the corresponding node as free node according to node nodeid.",
        updateNodesType: "Update Nodes Type",
        frontConfig: "Front Configure",
        addFrontSuccessMsg: "Add Front Success",
        addFrontErrMsg: "add Front Fail",
        admin: "Admin",
        observerText: "Set as observer node, node will not sealer",
        removeText: "Set as remote node, node will not sealer and synchronization",
        sealerText: "Set as sealer node, node will  sealer.Please contact professional settings"
    },
    contracts: {
        createFile: "Create File",
        createFolder: "Create Folder",
        upLoadFile: "Upload File",
        contractTips: "All contracts deployed within the group need to be added in contract management, compiled and saved, otherwise it will be judged as abnormal contracts.",
        rename: "Rename",
        contractCompileSuccess: "Contract Compiled Successfully!",
        contractCompileFail: "Contract Compilation Failed!",
        renameFail: "Deployed contract cannot be renamed!",
        nameFail: "The same contract exists in the same directory. Please rename it!",
        contractLong: "Please enter numbers or letters, 1 to 32 digits in length!",
        contractSize: "The file size is more than 400k, please upload a file less than 400k!",
        contractType: "Please upload a file in. Sol format!",
        contractNameSameFail: "Contract with the same name cannot exist in the same directory!",
        contractSaveSuccess: "Contract saved successfully!",
        contractDeleteFail: "There are deployed contracts in the folder, unable to delete the folder!",
        contractSaveTips: "Press Ctrl + s to save the contract content",
        contractOpenTips: "Please click on the left panel to open a contract or create a new contract",
        sendTransaction: "Sending Transaction",
        changeUser: "Select User",
        compileSuccess: "< Compile Successfully！",
        conmileNameError: "Contract name and file name should be consistent!",
        deploySuccess: "< Deployment Success！",
        contractDeploySuccess: "Contract deployed successfully！",
        contractName: "Contract Name",
        filePath: "File Path",
        folderName: "Folder Name",
        folderSameFail: "The new folder has the same name as the existing folder",
        user: "User",
        params: "Params",
        paramsInfo: "If the parameter type is an array, separate it with commas, without quotation marks, for example: arry1, arry2. Other types, such as string, do not need to be quoted.",
        contractAddress: "Contract Address",
        method: "Method",
        contractAddressInput: "Please enter the contract address",
        contractAddressInfo: "Optional item,import deployed contract addresses.",
        selectUser: "Please Select Users",
        methodType: "Method Type",
        methodName: "Method Name",
        contractCatalogue: "Contract Catalogue",
        copyContractAddress: "Copy Contract Address",
        contractAbi: "contract Abi",
        contractBin: "contract Bin",
        copyContractAbi: "Copy Contract Abi",
        copyContractBin: "Copy Contract Bin",
        abiInfo: "ABI Details",
        contractVersion: "Contract Version",
        adminUser: 'Administrator Account',
        createTable: "Create Table",
        insertTable: "Insert Table Record",
        searchTable: "Query Table Record",
        updateTable: "Update Table Record",
        deleteTable: "Delete Table Record",
        tableDetail: "Display Table Details",
        addPrivateKeyInfo: "Please add a private key user!"
    },
    privateKey: {
        addUser: "Add Users",
        addUserTips: "The account number of the transaction sent in the group needs to be added to the private key management, otherwise it will be judged as an abnormal user.",
        searchUser: "Please enter user name or public key address",
        copyPublicKey: "Duplicate Public Key",
        privateKey: "Private Key",
        publicKey: "Public Key",
        createUser: "Create User",
        userName: "User Name",
        userId: "User ID",
        description: "User Description",
        userAddress: "User public key address",
        userStatus: "User Status",
        inputDescription: "Please enter user description",
        updateUserSuccess: "User modified successfully",
        normal: "Normal",
        disable: "Disable",
        privateKeyUser: "Private key user",
        publicKeyUser: "Public key user",
        publicKeyInfo: "Public key information",
        inputUserName: "Please enter user name",
        inputPublicInfo: "Please enter public key information or public key address.",
        userLong: "Within 120 characters",
        inputPublic: "Please enter public key information",
        addUserSuccess: "User added successfully!",
        addUserFail: "Failed to add user!"
    },
    system: {
        chainManager: "Chain management permission",
        addChainManager: "Add chain management permission",
        copyAddress: "Copy Address",
        commonManager: "General Management Permission",
        chainAdministrator: "Chain Administrator",
        submit: "Submit",
        tableName: "table Name",
        userAddress: "Account Address",
        userName: "Account Name",
        deployAndCreate: "System and table building permission",
        cns: "CNS Permission",
        sysConfig: "System Configuration Permission",
        node: "Node Permissions",
        confirmPermission: "When adding the first administrator permission, the administrator will start the permission. Please confirm whether the account is correct. Misoperation may cause the service to be unavailable.",
        dialogTips: "Tips: public key users cannot authorize other users",
        outUserAddress: "Address of external account",
        inputUser: "Please enter your account number",
        authorizedSuccess: "Authorized Success",
        deleteSuccess: "Delete Successful",
        configContent1: "It is not recommended to modify tx_count_limit and tx_gas_limit arbitrarily. These parameters can be modified as follows.",
        configContent2: "Limited hardware performance such as machine network or CPU: reduce tx_count_limit, or reduce business pressure.",
        configContent3: "The business logic is too complicated. When the block is executed, there is not enough gas: increase the tx_gas_limit.",
        updateConfig: "Modify Configuration Values",
        configKey: "Configuration Name",
        configValue: "Configuration Value",
        gasLimit: "One transaction maximum gas limit",
        countLimit: "The maximum number of transactions that can be packaged in one block",
        gasLong: "Range from 100000 to 2147483647",
        addCertificate: "Import Certificate",
        export: "Export",
        certName: "Certificate Name",
        certType: "Certificate Type",
        fingerPrint: "Fingerprint",
        father: "Parent Fingerprint",
        address: "Address",
        validityFrom: "Validity Period",
        fileSize: "The upload file size cannot exceed 100kb!",
        importSuccess: "Successfully imported",
        uploadWarning1: "The current limit selects 10 files. This time I selected",
        uploadWarning2: "files and selected",
        uploadWarning3: "files.",
        to: "to"
    },
    account: {
        addAccount: "Add Account",
        user: "Account",
        roleNameZh: "Role",
        createAccount: "Create Account",
        deleteAccount: "Delete Account",
        updataAccount: "Modify Account",
        email: "Email",
        inputEmail: "Please enter email",
        emailTypeError: "E-mail format is incorrect"
    },
    transaction: {
        time: "Duration",
        interface: "Interface",
        week: "Last Week",
        month: "Last Month",
        threeMonth: "Last Three Months",
        regulatoryUser: "Failed to get supervised user list!",
        total: "Current Total Quantity",
        stroke: "Stroke",
        unusualTips: "Too many exceptions (greater than or equal to 20) will stop the audit. It is recommended to check the transaction status, find out the cause of the abnormality and import the contract or user to clean up the abnormal record.",
        transactionTime: "Latest Transaction Hours",
        hash: "Hash",
        inputUser: "Please Enter User",
        startTime: "Start Date",
        endTime: "End Date",
        unusualMoreTips: "There are too many exceptions and the audit has been stopped. It is recommended to check the transaction status, find out the cause of the abnormality and import the contract or user to clean up the abnormal record.",
        transactionHash: "Transaction Hash",
        transactionSearchFail: "Search transaction hash does not support fuzzy query.",
        toNull: "The deployment contract, the to field is empty.",
        unresolved: "Unresolved",
        reduction: "Reduction",
        searchTransactionFail: "Unable to query transaction information",
        decode: "Decode"
    },
    monitor: {
        node: "Node",
        showDate: "Show Date",
        contrastDate: "Contrast Date",
        selectDate: "Select Date",
        startEndTime: "Start/End Time",
        timeRange: "Select Time Range",
        dataGranularity: "Data Granularity",
        minute: "Minute",
        second: "Second",
        confirm: "Confirm",
        addFrontInfo: "Add Front Information",
        blockHeight: "Block Height",
        pendingCount: "Number of transactions to be packaged",
        dateFormat: "dd-MM-yyyy",
        dateLabel: "dd-MM-yyyy",
        startTime: "Start Time",
        endTime: "End Time",
        utilizationRate: "Utilization Rate",
        RAM: "RAM",
        hardDisk: "Hard Disk",
        txbps: "Upstream",
        rxbps: "Downstream",
        bandwidth: "Bandwidth",
        contrastDateData: "Contrast Daily Data",
        noData: "No data collected or data is 0",
        showDateData: "Display Date Data",
        nullData: "No Data Obtained",
        hostInfo: "Host Information",
        nodeInfo: "Node Information",
        selectDate: "Please select display date and time"
    },
    alarm: {
        alarmCofig: "Alarm configuration",
        emailAlarmConfig: "Email alert configuration",
        emailAlarmConfigYips: "System configuration management instructions: The system configuration can configure system property values (currently supports the setting of tx_count_limit and tx_gas_limit properties).",
        agreementType: "Agreement type",
        address: "Address",
        port: "Port",
        authentication: "Authentication",
        authenticationTips: "Use username / password for authentication by default and connect to the mailbox service via SSL / TLS",
        user: "User",
        password: "Password",
        save: "Save",
        test: "Test",
        saveTips: "The mailbox configuration has been modified and not saved, please click the save button to save the modification.",
        serverTypeTips: "Please enter service type",
        longSize: "1 to 32 characters",
        notRule: "Does not meet the rules",
        enterAddress: "Please enter an address",
        enterEmail: "Please input your email",
        enterEmailPsd: "Please enter your email password",
        enterFormat: "Please enter the encoding format",
        tip: "Tip",
        send: "Send",
        cancel: "Cancel",
        emailTypeErr: "E-mail format is incorrect",
        cancelEnter: "Cancel entry",
        sendEmailSuccess: "Mail sent successfully!",
        updateEmailAlarmConfigSuccess: "Modifying the alarm mailbox configuration succeeded!",
        enterSaveInfo: "Please save the modified configuration information!",
        alarmTypeConfig: "Alarm type configuration",
        enableAlarm: 'Whether to enable the alarm',
        alarmCofigList: "Alarm configuration list",
        alarmEmailTile: "Alert email title",
        emailContent: "Mail template",
        sendTime: "Sending interval",
        operation: "0peration",
        update: "Update",
        disable: "Disable",
        enable: "enable",
        alarmLogList: "Alarm log list",
        alarmType: "Alarm type",
        alarmLevel: "Alarm level",
        high: "high",
        common: "common",
        low: "low",
        alarmContent: "Alarm content",
        alarmStatus: "Alarm status",
        processed: "processed",
        unprocessed: "unprocessed",
        alarmTime: "Alarm time",
        modifyTime: "modify time",
        confirm: "confirm",
        start: "start",
        sureHandle: "Are you sure?",
        sure: "sure",
        logsSure: "The log has been confirmed",
        enableAlarm: "Enable alarm, continue?",
        disableAlarm: "Disable alarm, continue?",
        addEmail: "Please add a receiving email!",
        noAlarmEmail: "The alarm mailbox is not set!",
        disableAlarmSuccess: "Disable alarm successfully!",
        enableAlarmSuccess: "Alarm enabled successfully!",
        nodeAlarm: "Node alert",
        auditAlert: "Audit alert",
        certAlert: "Certificate alert",
        hours: "hours",
        minute: "minute"
    }
}