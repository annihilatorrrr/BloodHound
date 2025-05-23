// Copyright 2023 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import { Typography } from '@mui/material';
import { FC } from 'react';

const LinuxAbuse: FC = () => {
    return (
        <>
            <Typography variant='body2'>
                You may perform a dcsync attack to get the password hash of an arbitrary principal using impacket's
                secretsdump.py example script:
            </Typography>

            <Typography component={'pre'}>
                {"secretsdump.py 'testlab.local'/'Administrator':'Password'@'DOMAINCONTROLLER'"}
            </Typography>

            <Typography variant='body2'>
                You can also perform the more complicated ExtraSids attack to hop domain trusts. For information on this
                see the blog post by harmj0y in the references tab.
            </Typography>
        </>
    );
};

export default LinuxAbuse;
